// 次元件
function SecondComponent({ c }) {
  // console.log(props);
  return (
    <>
      <h1>我是SecondComponent</h1>
      <p>SecondComponent接收的屬性是：{c}</p>
    </>
  )
}

// 子元件接收主元件傳遞過來的元件
function MyComponent({ a, children }) {
  // console.log(props);

  return (
    <>
      <h2>接收來自於主元件傳遞的元件</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sapiente temporibus id reiciendis impedit amet. Accusamus fuga quisquam vero ab!</p>
      {children}
      我是：{a}
    </>
  )
}

// 直接傳送元件
function MyComponent2({ b }) {
  return (
    <>
      <h2>接收來自於主元件傳遞的元件</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sapiente temporibus id reiciendis impedit amet. Accusamus fuga quisquam vero ab!</p>
      <SecondComponent c={b} />
      我是: {b}
    </>
  )
}

const App0819b = () => {
  return (
    <div>
      <h1>元件之間，傳遞元件</h1><hr />
      <MyComponent a='屬性a'>
        <SecondComponent c='屬性a' />
      </MyComponent>

      <hr />
      <MyComponent2 b='屬性b' />
    </div>

  )
}

export default App0819b