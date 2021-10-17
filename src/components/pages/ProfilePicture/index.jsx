import { Pagewrapping } from './Profilepicture';


const ProfilePicture = () => {


   const fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    const fileUploadHandler = () => {
        const formdata = new FormData();
        formdata.append('image', this.state.selectedFile, this.state.selectedFile.name)
        // enter backend link?
    }
    return (
    <Pagewrapping>
        <input type="file" onChange={fileSelectHandler}/>
        <button onClick={fileUploadHandler}>Upload</button>
    </Pagewrapping>
    );
};

export default ProfilePicture;