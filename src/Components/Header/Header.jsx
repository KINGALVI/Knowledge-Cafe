import Profile from '../../../public/knowledge-cafe-project-image/images/profile.png'

const Header = () => {
    return (
        <>
            <h1 className="text-7xl text-center font-bold">Knowledge Cafe</h1>
            <br />
            <div className='flex items-center justify-center'><img className='h-40 w-40' src={Profile} alt="" /></div>
        </>
    );
};

export default Header;