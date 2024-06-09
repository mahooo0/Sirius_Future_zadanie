
import React from 'react';
interface Props{
    isActive:boolean
    className:string
}
function SettingsIcon(props:Props) {
    const{isActive,className}=props
    return (
        <div className={className}>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1213 9.87868C15.2929 11.0502 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87866 14.1213C8.70709 12.9497 8.70709 11.0502 9.87866 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868" stroke={isActive?"white":"#434B74"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.18 18.725V18.725C16.683 19.228 17.5 19.228 18.003 18.725L18.725 18.003C19.228 17.5 19.228 16.683 18.725 16.18V16.18C18.343 15.798 18.231 15.225 18.441 14.727C18.463 14.674 18.485 14.621 18.506 14.567C18.689 14.101 19.143 13.801 19.643 13.801H19.71C20.422 13.801 20.999 13.224 20.999 12.512V11.491C20.999 10.779 20.422 10.202 19.71 10.202H19.643C19.143 10.202 18.689 9.901 18.506 9.436C18.485 9.382 18.463 9.329 18.441 9.276C18.231 8.778 18.343 8.205 18.725 7.823V7.823C19.228 7.32 19.228 6.503 18.725 6L18.003 5.278C17.5 4.775 16.683 4.775 16.18 5.278V5.278C15.798 5.66 15.225 5.772 14.727 5.562C14.674 5.54 14.621 5.518 14.567 5.497C14.101 5.311 13.8 4.856 13.8 4.356V4.289C13.8 3.577 13.223 3 12.511 3H11.49C10.777 3 10.2 3.577 10.2 4.289V4.356C10.2 4.856 9.899 5.31 9.434 5.493C9.38 5.515 9.327 5.536 9.274 5.559C8.776 5.769 8.203 5.657 7.821 5.275V5.275C7.318 4.772 6.501 4.772 5.998 5.275L5.275 5.997C4.772 6.5 4.772 7.317 5.275 7.82V7.82C5.657 8.202 5.769 8.775 5.559 9.273C5.536 9.327 5.515 9.38 5.494 9.434C5.311 9.899 4.856 10.2 4.356 10.2H4.289C3.577 10.2 3 10.777 3 11.489V12.51C3 13.223 3.577 13.8 4.289 13.8H4.356C4.856 13.8 5.31 14.101 5.493 14.566C5.514 14.62 5.536 14.673 5.558 14.726C5.768 15.224 5.656 15.797 5.274 16.179V16.179C4.771 16.682 4.771 17.499 5.274 18.002L5.996 18.724C6.499 19.227 7.316 19.227 7.819 18.724V18.724C8.201 18.342 8.774 18.23 9.272 18.44C9.325 18.462 9.378 18.484 9.432 18.505C9.898 18.688 10.198 19.142 10.198 19.642V19.709C10.198 20.421 10.775 20.998 11.487 20.998H12.508C13.22 20.998 13.797 20.421 13.797 19.709V19.642C13.797 19.142 14.098 18.688 14.563 18.505C14.617 18.484 14.67 18.462 14.723 18.44C15.224 18.231 15.797 18.343 16.18 18.725V18.725Z" stroke={isActive?"white":"#434B74"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
    );
}

export default SettingsIcon;