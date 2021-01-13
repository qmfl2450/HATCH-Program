const {Router} = require('express')

const service = require('./user.service')
const {getSalt, getExpiredTime, getHash} = require('../lib/hash')
const db = require('../../../helper/db')

const router = Router()

const connectStatus = {}

// 유저 목록을 조회 API
router.get('/', async (req, res) => {
  const page = req.query.page === undefined ? 1 : +req.query.page
  const pageSize = req.query.pageSize === undefined ? 2 : +req.query.pageSize

  if (isNaN(page)) {
    res.status(400).json({message: 'page의 값이 숫자가 아닙니다.'})
    return
  }
  if (isNaN(pageSize)) {
    res.status(400).json({message: 'pageSize의 값이 숫자가 아닙니다.'})
    return
  }

  const offset = (page - 1) * pageSize
  const users = await service.usersRead(offset, pageSize)
  const total = await service.usersRead()

  res.json ({
    users,
    page,
    pageSize,
    total: total.length
  })
})

// 유저 생성 API
router.post('/', async (req, res) => {
  const {pw, name} = req.body
  if (!pw) {
    res.status(400).json({message: '"pw"가 입력되지 않았습니다.'})
    return
  }
  if (!name) {
    res.status(400).json({message: '"name"가 입력되지 않았습니다.'})
    return
  }

  const salt = getSalt()
  const user = {
    salt,
    pw: getHash(pw, salt),
    name,
    enabled: 'enable'
  }
  const [id] = await service.userCreate(user)

  res.json({
    id,
    name: user.name,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  })
})

// 유저 로그인 API
// router.post('/signin', (req, res) => {
//   // 로그인 API 구현
//   const {id, pw} = req.body
//   const user = userFindById(id)
//   if (!user) {
//     res.status(404).json({})
//     return
//   }

//   if (user.pw !== getHash(pw, user.salt)) {
//     res.status(401).json({message: '입력하신 비밀번호가 올바르지 않습니다.'})
//     return
//   }

//   const token = getSalt()
//   const expired = getExpiredTime()
//   connectStatus[id] = {
//     token, expired
//   }

//   res.json({
//     token, expired
//   })
// })

// 로그인이 되었는지 확인하는 미들웨어 생성
// router.use('/:id', (req, res, next) => {
//   const {id} = req.params
//   if (!id) {
//     res.status(404).json({})
//   }

//   const connection = connectStatus[id]
//   if (!connection) {
//     res.status(401).json({message: '해당 계정의 로그인 기록이 없습니다.'})
//     return
//   }

//   const token = req.headers['_token_']
//   if (!token) {
//     res.status(401).json({message: 'token 정보를 입력해주세요.'})
//     return
//   }

//   if (token !== connection.token) {
//     res.status(401).json({message: 'token 정보가 올바르지않습니다.'})
//     return
//   }

//   if (Date.now() > connection.expired) {
//     res.status(401).json({message: '해당 계정의 로그인 접속시간이 만료되었습니다.'})
//     return
//   }

//   // token 만료시간 갱신
//   connection.expired = getExpiredTime()

//   next()
// })

// 유저 상세 조회 API
router.get('/:id', async (req, res) => {
  const {id} = req.params
  const [user] = await service.findUser(id)

  if (!user) {
    console.log('유저 없음')
    res.status(404).json({})
    return
  }

  res.json({
    user
  })
})

// 유저 수정 API
router.patch('/:id', async (req, res) => {
  const {id} = req.params
  const {pw, name, enable} = req.body

  const [user] = await service.findUser(id)
  const salt = getSalt()
  const newPw = getHash(pw, salt)

  if (pw && user.pw !== newPw) {
    const updatePw = await service.userUpdate(id, {pw: newPw, salt: salt})
  }
  if (name && user.name !== name) {
    const updateName = await service.userUpdate(id, {name: name})
  }
  if (enable && user.enable !== enable) {
    const updateEnabled = await service.userUpdate(id, {enabled: enable})
  }
  
  res.json({message: '유저데이터 수정에 성공하였습니다.'})
})

// 유저 삭제 API
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  const user = await service.findUser(id)
  if (!user) {
    res.status(404).json({})
    return
  }

  const userDelete = await service.userUpdate(id, {enabled: 'disable'})

  res.status(204).send()
})

module.exports = router
