import Employee from '../components/Employee'
// 建立陣列物件資料(array)=>像資料庫的邏輯
const arrEmployees = [
    {
        id: 1,
        name: '員工一',
        age: '21',
        h: 158,
        w: 50,
    },
    {
        id: 2,
        name: '員工二',
        age: '22',
        h: 168,
        w: 56,
    },
    {
        id: 3,
        name: '員工三',
        age: '23',
        h: 170,
        w: 60,
    },
    {
        id: 4,
        name: '員工四',
        age: '25',
        h: 185,
        w: 78,
    }
]

// 建立物件資料(objects)
const employees = {
    emp1: {
        name: '員工一',
        age: '21'
    },
    emp2: {
        name: '員工二',
        age: '22'
    },
    emp3: {
        name: '員工三',
        age: '23'
    }
}


const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 呼叫員工元件，使用陣列物件資料：搭配map() */}
            {
                arrEmployees.map((emp) => {
                    return (
                        <Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w} />
                    )
                })
            }

            {/* 呼叫員工元件，用物件資料 */}
            {/* <Employee name={employees.emp1.name} age={employees.emp1.age} />
            <Employee name={employees.emp2.name} age={employees.emp2.age} />
            <Employee name={employees.emp3.name} age={employees.emp3.age} /> */}

            {/* 呼叫員工元件，使用固定值 */}
            {/* 如果起始標籤和關閉標籤之間沒有要做任何事的話，元件呼叫可以只寫一個標籤但要在最後加「/」
            <Employee name='員工一' age='21' /> 
            <Employee name='員工二' age='22' />
            <Employee name='員工三' age='23' /> */}
        </div>
    )
}

export default App