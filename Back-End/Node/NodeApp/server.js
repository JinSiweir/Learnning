const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.port || process.env.PORT || 8761;

const apiRoot = ''
const app = express();

// configure app 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// app.use(cors({ origin: /http:\/\/locahost/ }))
// app.options('*', cors())        
app.use(cors())


// configure routes 
const router = express.Router();
router.get('/', (req, res) => {
    res.send('siweir')
})

router.post('/collage/login', (req, res) => {
    const data = req.body;
    const account = db[data.userName]
    if (!account) {
        return res
            .status(200)
            .json({ message: 'user does not exist' })

    }
    res.send({
        code: 0,
        message: '登陆成功',
        data: {
            userId:'siweir222222',
            token: 'siweir134552123'
        }
    })
    console.log(data);
})

router.post('/collage/regiser',(req,res)=>{
    console.log(req.body);
    res.send({
        msg:'siweir'
    })
})
router.get('/user/rest',(req,res)=>{
    console.log(req.query);
    res.send({
        rtn:500,
        msg:'rest error'
    })
})

router.get('/user/info', (req, res) => {
    const data = db['userInfo']
    res.send({
        rtn: 200,
        msg: '',
        data: {
            ...data
        }
    })
})

router.get('/product/kill-time', (req, res) => {
    const data = db['killTime']
    res.send({
        rtn: 200,
        msg: '',
        data: {
            list: data
        }
    })
})
router.get('/collage/get_brand_list', (req, res) => {
    console.log(req);
    const data = db['killLists']
    res.send({
        code: 200,
        message: '',
        data: data
    })
})

router.get('/collage/get_brand',(req,res)=>{
    res.send({
        id:req.body.id,
        caption:'14 英寸 MacBook Pro - 深空灰色',
        intro:'由Apple M1 芯片强势驱动，性能撼动人心。 选iPad 的理由:做什么都好，什么都做得好。',
        picUrl:'',
        price:8645,
        stocks:1799,
    })
})

router.get('/order-list',(req,res)=>{
    res.send({
        rtn:200,
        msg:'success',
        data:[]
    })
})

app.use(apiRoot, router)
app.listen(port, () => {
    console.log(`server up : http://localhost:${port}`);
})

const db = {
    'siweir': {
        'userName': 'siweir',
        'passworld': 'siweir123',
    },
    'userInfo': {
        'email': 'siweir@outlook.com',
        'nickName': 'siweir',
        'avatar': '',
        'phone': 2832213
    },
    'killTime': [
        {
            'date': '3月20日',
            'time': '9:00'
        },
        {
            'date': '3月20日',
            'time': '11:00'
        }, {
            'date': '3月20日',
            'time': '19:00'
        }, {
            'date': '3月20日',
            'time': '21:00'
        },

    ],
    'killLists': [
        {
            'id':1764,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 2389,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            'id':2,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 2489,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            'id':3,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 4389,
            'goodRating': 19,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            'id':4,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 209,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            'id':5,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 32,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            'id':6,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 55,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            "id":'7',
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 2389,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            'id':8,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 2389,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            'id':9,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 2389,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
        {
            'id':10,
            'pic': '@/assets/onePlus9RT.jpg.webp',
            'price': 2389,
            'goodRating': 99,
            'describe': '一加 9RT 5G 120Hz 高刷好屏12GB+256GB 青空结界 高通骁龙888 65T快充 原神专业超广角拍照游戏手机'
        },
    ]
}