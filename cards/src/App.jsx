import './App.css'
import Cards from './components/Cards'

function App() {
  const item = {
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    title: 'Hello',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
  }
  return (
    <div className='cards'>
      <Cards img = {item.img} title = {item.title} text= {item.text}></Cards>
      <Cards title = {'Welcome'} text= {'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita'} />
      <Cards text = {'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}/>
    </div>
  )
}

export default App
