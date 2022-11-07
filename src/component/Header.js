import React, { memo } from "react";

function Header() {

    console.log("Header Render Edildi")

    return (
        <>
            <h1>HEADER EKLENDİ</h1>
        </>
    )
}
export default memo(Header)