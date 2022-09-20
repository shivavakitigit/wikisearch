// // // const
// // // var
// // // let

// import { faDashboard } from "@fortawesome/free-solid-svg-icons"


// // primitive data 
// // // single
// // String   "keerthi"
// // Number    124234234
// // Boolean   true or false
// // undefined  not mentioned anything we will get undefined
// // null        single value


// // not primitive data types



// // array + object  == array of objects

// // const arrays = ['{
// //     key:value,
// //     "name":'shiva'
// // }];

// // 0 1 2 3 

// // {
// //     key:value,
// //     "name":'shiva'
// // }

// // objects{}




// // 1 2 3 4 5

// // using for
// // // for (let index = 0; index < array.length; index++) {
// // //     const element = array[index];
    
// // // }
// // // foreach
// // // array.forEach(element => {
    
// // // });


// // // map
// // // array.map(element => {
    
// // // });


// // for of
// // arrays 

// // for in

// // objects

// // {
// //     name:'shhhhh'
// // }

// // object.values()




// // /// hoisting


// // let a = 10;
// // console.log(a)


// // // scoping

// // global
// // local
// // functional

// // const App = () =>{
// // const a =16;  // global scope

// // function res(){
// //     const b = 40;
    
// // }

// // //closures

// // }

// // const url = wwww.randomdata.com
// // const res = url.data

// // const data = "something";

// // function data(data, res, onemorepara){
// // if(data==='something' && res.key===201 || onemorepara){
// //     return true 
// // } else{
// //     false
// // }
// // }


// // /// inteerview questiion currying

// // // function sum(a){   2
// // //     function secondValue(b){ 7
// // //         function thirdFunc(c){ 9
// // //                 return a+b+c
// // //                        2+7+9
// // //         }
// // //     }
// // // }

// // // console.log(sum(2)(7)(9))
// // // (7)(9)   
// // // sum ()    ()   ()

// // // // 18


// // // callbacks
// // arrays.map((arrays)=>{
// //     console.log(arrays)
// // })


// // funtion map(){
// //     map.push(array)
// // }


// // // api calling


// // fetch
// // axios 


// // // promises
// // // async await


// // // object destruring
// // // array destructing


// // const names ={
// //     name:"ka paul",
// //     age:'unknown',
// //     location:"everywhere",
// //     native:"AP"
// // }

// // const [age, native]  = names;

// // const [state, updateState]=useState([{
// //     touristPlace:"bali"
// // }])


// // console.log(name)
// // console.log(age)
// // console.log(location)
// // console.log(native)

// // // es6 features

// // // api calling

// // async dataFetching = ()=>{
// //     const url = await 'www.hgoogle.com';
// //     const res = await url.res.data;
// //     //post
// //     //get
// //     //delete
// //     // put

// //     const payload ={
// //         location:"new york"
// //     }

// //     axios.post(url,payload)=>{
// //         const res = await url.res.data;


// //     }

// //     axios.get(url)=>{
// //         debugger
// //         const res = await url.res.location;
// //     }

// //     axios.delete(url,payload.id)=>{
// //         const res = await url.res.data;
// //     }

// //     axios.delete(url,payload.id)=>{
// //         const res = await url.res.data;
// //     }


// // }


// // Object.freeze(arrays)

// // // debugger

// // // react?

// // // react dev tools




// // react


// App.js
// Headers.js
// Footer.js
// faDashboard.js

// const bankBal = useSelector(updatedstate=>state.bankBalance)
// const dispatch = useDispatch();

// const need2k = () =>{
//     dispatch({type:"2kAMount",
// paload:2000})
// }
// console.log(bankBal)   // ui  5000

// FileSystemEntry.js

// // data

// // state const App = ()=> {

// }

// // js data 

// // props  properties


// // child to parent

// // using through callbacks

// // redux

// Globalstate const App = () => {
//     const name = "keerthi"
// }


// UI

// actionCreaters

// actionTypes

// Reducer

// Store








// kindgom


// King   ===== 10000



// UI


// soldiers   suresh    rajesh

// {type:"depositMoney",
// payload:10000
// }

// {
//     type:"withDraw",
//     payload:5000
// }

// Bank Manager

// Reducer

// const IntialBankBalance = 0;

// addMoney = 10000

// case 1 : 'DepositMoney'
// if(state=IntialBankBalance,action){
// action.type==="depositMoney",
// action.payload

// return state
// }



// case 2 :

// if(state=IntialBankBalance,action){
//     action.type==="withdrawlMoney", payload: 50000

//     return state
//     10000- 50000
//     initalBal - deductedBal
//     currentAccount
// }


// // life cycle methods

// // mounting
// // updating
// // unmounting


// // var array = [{
// //     fruitsNam:"apple",
// //     cost:500
// // }]


// // // functional based components
// // // constructor(){

// // // }

// // const [arrayData, setarray] = useState(second)


// // useEffect(() => {
// //   first
// //   var array = [{
// //     fruitsNam:"apple",
// //     cost:500
// // }]

// //   return () => {  
// //     return
// //   }
// // },[arrayData])


// // function callArrayTwice(){
// //     setarray(array)
// // }



// // <button onClick={callArrayTwice}> Add me when ur free</button>


// // useEffect(() => {
// //   apiCalls
// // }, [third])

// // useSelector ()   // display the redux store values 
// // useDispatch()    // used to trigger actions {type, payload}
// // useCallback(
// //   () => {
// //     first
// //   },
// //   [second],
// // )

// // useMemo(() => first, [second])

// // millionOFtableData.map(element => {
// //     1 2 4 4 5 5 55 10 millions
// // });

// // const first = useRef(second)

// // useContext

// // reducer

// // const state = {
// //     name:"shiva",
// //     location:"bangaore"
// // }



// // switch(state,action){
// // if(action.type==="modifyName", payload:"keerthi"){
// //     return ...state + keerthi 
// // return state;
// //     // finally we will get one single state value
// // }

// // need to pass as parameters
// // axios.get(url)
// // axios.get(1st url)
// // axios.get(1st url)
// // axios.get(1st url)
// // axios.get(1st url)
// // axios.get(1st url)
// // axios.get(1st url)
// // axios.get(1st url)
// // axios.get(1st url)
// // customHooks

// // const customHooks = (url) =>{
// //     const url = {props.url}

// //     return res.data
// // }


// // App.js
// // customHooks(expUrl)
// // const expUrl = "www.google.com";





















































const greeting = "elllooo"