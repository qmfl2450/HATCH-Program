const {Router} = require('express')

const userModel = require('./user')

const router = Router()

let USER_DATA = [
    new userModel('red', '1111', '아무개1', 'enable', new Date(), new Date()),
    new userModel('blue', '1111', '아무개2', 'enable', new Date(), new Date()),
    new userModel('yellow', '1111', '아무개3', 'enable', new Date(), new Date()),
    new userModel('pink', '1111', '아무개4', 'enable', new Date(), new Date()),
    new userModel('black', '1111', '아무개5', 'disable', new Date(), new Date()),
    new userModel('gold', '1111', '아무개6', 'enable', new Date(), new Date())
];

// 유저 목록을 조회하는 API
router.get('/', (req, res) => {
    const page = +req.query.page || 1
    const pageSize = +req.query.pageSize || 2

    if (isNaN(page)) {
        res.status(400).json({message: 'page의 값이 숫자가 아닙니다.'})
        return
    }
    if (isNaN(pageSize)) {
        res.status(400).json({message: 'pageSize의 값이 숫자가 아닙니다.'})
        return
    }

    const users = USER_DATA.filter(user => {
        if (user.enable === 'disable') return false
        if (name) {
            if(user.name.includes(name)) return false
        }

        return true
    })

    const offset = (page - 1) * pageSize

    // pw와 user를 주지 않음
    const items = user.slice(offset, offset + pageSize).map(({pw, enable, ...user}) => user)

    res.json({
        items,
        page,
        pageSize,
        total: user.length
    })

    res.json(items)
})

// 유저 상세 조회 API
router.get('/:id', (req, res) => {
    const {id} = req.params
    const user = USER_DATA.find(user => user.id === id)
    if (!user) {
        res.status(404).json({})
        return
    }

    res.json({
        id,
        name: user.name,
        createAt: user.createAt,
        updateAt: user.updateAt
    })
})

module.exports = router