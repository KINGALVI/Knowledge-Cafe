// Importing the profile image from the public folder
import Profile from '../../../public/knowledge-cafe-project-image/images/profile.png';

const Header = () => {
    return (
        <>
            {/* Page Title */}
            <h1 className="text-7xl text-center font-bold">Knowledge Cafe</h1>

            {/* Spacer for better UI structure */}
            <br />

            {/* Profile Image Container */}
            <div className="flex items-center justify-center">
                {/* Profile Image */}
                <img className="h-40 w-40" src={Profile} alt="Profile" />
            </div>
        </>
    );
};

export default Header;