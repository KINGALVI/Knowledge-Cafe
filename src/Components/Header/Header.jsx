import Profile from '../../../knowledge-cafe-project-image/images/girl2.jpg'

const Header = () => {
    return (
        <>
            <h1 className="text-5xl text-center font-bold">Knowledge Cafe</h1>
            <br />
            <div className='flex items-center justify-center'><img className='h-40 w-40' src={Profile} alt="" /></div>
        </>
    );
};

export default Header;