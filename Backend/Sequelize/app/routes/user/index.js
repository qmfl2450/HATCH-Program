const {Router} = require('express')

const {User} = require('../../../models/')
const service = require('./user')
const {getSalt, getExpiredTime, getHash} = require('../lib/hash')

const router = Router()

// 유저 목록 조회
router.get('/', (req, res) => {
    const page = req.query.page === undefined ? 1 : +req.query.page
    const pageSize = req.query.pageSize === undefined ? 2 : +req.query.pageSize
    const name = req.query.name
  
    if (isNaN(page)) {
      res.status(400).json({message: 'page의 값이 숫자가 아닙니다.'})
      return
    }
    if (isNaN(pageSize)) {
      res.status(400).json({message: 'pageSize의 값이 숫자가 아닙니다.'})
      return
    }
    
    return service.userFindAll({page, pageSize})
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(500).json(e)
        })
})

// 유저 생성
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
    try {
        const userCreate = await service.userCreate(user)
        // console.log(userCreate)
        // console.log(user)
        // console.log(userCreate.datavalues)
        console.log(userCreate.id)
        res.json({
            name: user.name
        })
    }
    catch (e) {
        res.status(500).json(e)
    }
})

// 유저 로그인
router.post('/', (req, res) => {
    
})

// 로그인 확인
router.use('/', (req, res) => {
    
})

// 유저 상세 조회
router.get('/:id', (req, res) => {
    // const {id} = req.params

    // return 
})

// 유저 수정
router.patch('/', (req, res) => {
    
})

// 유저 삭제
router.delete('/', (req, res) => {
    
})

module.exports = router