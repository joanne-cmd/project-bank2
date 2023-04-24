import './Header.css'
import Sidebar from '../sidebar/Sidebar'
import Course from '../course/Course'
// import Footer from './Footer'
function Header() {
  return (
    <>
        <div className='header'>
                    <img src='https://moringaschool.com/wp-content/uploads/2022/02/cropped-favicon-32x32.png' alt='logo'/>
                    <h2>Pay-Bank</h2>

                <div className='header-nav'>
                    <span className='option-one'> Home</span> 
                    <span className='option-one'>About us</span>
                    <span className='option-one'>Contact us</span>
                </div>


            </div>

             <Sidebar/>
            <Course/>
            {/* <Footer/>  */}
    </>
    
  )
}

export default Header