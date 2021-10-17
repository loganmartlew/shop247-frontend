import { authFetchApi } from "./fetchApi";

const imageChanger = async (currentUser, imgsrc, user) => 
{
    if (!currentUser) throw new Error();
    
    const res = await authFetchApi (
        `/user/${currentUser}`,
        {
            method: 'PATCH',
            body: JSON.stringify({ updates: imgsrc}),
        },
        user
    );
        if (!res.ok) throw new Error();
};

export default imageChanger;