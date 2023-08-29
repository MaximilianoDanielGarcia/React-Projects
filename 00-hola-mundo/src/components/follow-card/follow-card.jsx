import { useState } from 'react';
import './follow-card.css'

export function FollowCard ({userName, name, following}) {

    const [isFollowing, setIsFollowing] = useState(following);

    const followTextButton = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'is-following' : '';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='fc-container'>
            <header className='fc-header'>
                <img className='fc-header-avatar' src={`https://unavatar.io/${userName}`} alt="" />
                <div className='fc-header-user-info'>
                    <strong>{ name }</strong>
                    <p>@{ userName }</p>
                </div>
            </header>
            <aside className='fc-aside'>
                <button className={ buttonClassName } onClick={handleClick}>
                    <span className='fc-follow-text'>{ followTextButton }</span>
                    <span className='fc-stop-follow-text'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
    
}