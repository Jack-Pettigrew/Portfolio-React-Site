import { useEffect } from "react";
import Links from "./Links"
import "./SiteTitle.css"

export default function SiteTitle() {
    
    // Set position to be normal - CSS doesn't animate it right
    setTimeout(() => {
        document.querySelector('.title').style.position = 'sticky';
    }, 4000);

    // Rotate link one by one
    useEffect(() => {
        const flipLink = async () => {
            const list = document.querySelectorAll('.icon');

            for (let i = 0; i < list.length; i++) {
                await new Promise((resolve) => {
                    setTimeout(function () {
                        list[i].classList.add('rotated');
                        resolve();
                    }, 250)
                });

            }
        };

        // Delay call
        setTimeout(flipLink, 4000);
    });
    
    return (
    <div className='title'>
        <p className="name">Jack Pettigrew</p>
        <Links className="links" transitionClass="hidden-rotation" />
    </div>
)
}
