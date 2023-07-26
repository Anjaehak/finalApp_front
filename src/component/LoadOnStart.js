import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { jwtState, userEmailState } from "..";

function LoadOnStart() {
    const [jwt, setJwt] = useRecoilState(jwtState);
    const [userEmail, setUserEmail] = useRecoilState(userEmailState);
    console.log("loadOnStart");

    if (sessionStorage.getItem("authToken")) {
        setJwt(sessionStorage.getItem("authToken"));
        setUserEmail(sessionStorage.getItem("authUserEmail"));
    }

    return (
        <>
        </>
    );
}

export default LoadOnStart;