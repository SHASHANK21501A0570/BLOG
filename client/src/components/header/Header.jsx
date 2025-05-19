import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React &</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg"
      src="https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_1280.jpg"
      alt=""/>
    </div>
  )
}
