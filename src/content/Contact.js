import React from 'react';
import Octicon, {Mail, Person, Inbox, MarkGithub} from '@primer/octicons-react'

export default function Contact(props) {
    return (
        <nav>
            <ul>
                <li alt="email">
                    <Octicon icon={Mail} /><div className="spacer"></div>
                    erikjheikkila@gmail.com
                </li>
                <li>
                    <Octicon icon={Person} /><div className="spacer"></div>
                    <a href="https://www.linkedin.com/in/erik-hei/" target="_blank">
                        LinkedIn
                    </a>
                </li>
                <li alt="github">
                    <Octicon icon={MarkGithub} /><div className="spacer"></div>
                    GitHub: <div className="spacer"></div>
                    <a href="https://github.com/erik-hei" target="_blank">erik-hei</a>
                </li>
                <li>
                    <Octicon icon={Inbox} /><div className="spacer"></div>
                    <a href="https://www.dropbox.com/s/z38saj60byygo59/Erik-Heikkila-Resume.pdf?dl=0" target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
    )
}