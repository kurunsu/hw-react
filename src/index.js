import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Users = ({name, favoriteFood, skills}) => {
  const [score, setScore] = useState(0)
  const handleClick = () => {
    setScore(score + 1)
  }
  
  return (
    <>
      <h3>{name}</h3>
        <ul>
          <li>好きな食べ物：{favoriteFood}</li>
          <li>特技：{skills}</li>
        </ul>
      <p>Score : {score}</p>
      <button
      type ="button"
      onClick ={handleClick}
      >
      加点
      </button>
    </>
  )
}

const App = () => {
  const users = {
    iskw : {
      name : "イシカワ先生",
      favoriteFood : "スマブラ",
      skills : "お昼寝"
    },
    krs : {
      name : "来栖",
      favoriteFood : "ラーメン",
      skills : "夜更かし"
    }
  }

  return (
  <>
    <h1>Hellow, World</h1>
    <h2>自己紹介</h2>
    <Users name={users.iskw.name} favoriteFood={users.iskw.favoriteFood} skills={users.iskw.skills} />
    <Users name={users.krs.name} favoriteFood={users.krs.favoriteFood} skills={users.krs.skills} />
  </>
  )
}



ReactDOM.render (
  <App />,
  document.getElementById('root')
)
