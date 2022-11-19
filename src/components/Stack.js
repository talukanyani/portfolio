import React from 'react'
import styles from './Stack.module.css'

import html from '../assets/html_logo.svg'
import css from '../assets/css_logo.svg'
import javascript from '../assets/javascript_logo.svg'
import nodejs from '../assets/nodejs_logo.svg'
import express from '../assets/express_logo.svg'
import react from '../assets/react_logo.svg'
import mysql from '../assets/mysql_logo.svg'
import dart from '../assets/dart_logo.svg'
import flutter from '../assets/flutter_logo.svg'
import aws_ebs from '../assets/aws_elastic_beanstalk_icon.svg'
import aws_rds from '../assets/aws_rds_icon.svg'
import aws_route53 from '../assets/aws_route53_icon.svg'
import vscode from '../assets/vscode_logo.svg'
import chrome from '../assets/chrome_logo.svg'
import postman from '../assets/postman_logo.svg'
import git from '../assets/git_logo.svg'
import github from '../assets/github_logo.svg'

export default function Stack() {
    return (
        <div className={styles.stack} id='stack'>
            <h1>My Tech Stack</h1>
            <div className={styles.stack_parts}>
                <div>
                    <h2>Front-End Development</h2>
                    <ul>
                        <li>
                            <img src={html} alt='html icon' />
                            HTML
                        </li>
                        <li>
                            <img src={css} alt='css icon' />
                            CSS
                        </li>
                        <li>
                            <img src={javascript} alt='javascript icon' />
                            JavaScript
                        </li>
                        <li>
                            <img src={react} alt='react icon' />
                            React
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Back-End Development</h2>
                    <ul>
                        <li>
                            <img src={javascript} alt='javascript icon' />
                            JavaScript
                        </li>
                        <li>
                            <img src={nodejs} alt='node.js icon' />
                            Node.js
                        </li>
                        <li>
                            <img src={express} alt='express icon' />
                            Express
                        </li>
                        <li>
                            <img src={mysql} alt='myql icon' />
                            MySQL
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>
                        Mobile Development
                        <span>on progress</span>
                    </h2>
                    <ul>
                        <li>
                            <img src={dart} alt='dart icon' />
                            Dart
                        </li>
                        <li>
                            <img src={flutter} alt='flutter icon' />
                            Flutter
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>AWS Cloud <span>minimal</span></h2>
                    <ul>
                        <li>
                            <img src={aws_ebs} alt='aws icon' />
                            Elastic Beanstalk
                        </li>
                        <li>
                            <img src={aws_route53} alt='aws icon' />
                            Route53
                        </li>
                        <li> <img src={aws_rds} alt='aws icon' />
                            RDS</li>
                    </ul>
                </div>
                <div className={styles.l}>
                    <h2>Tools</h2>
                    <ul>
                        <li>
                            <img src={vscode} alt='vscode icon' />
                            VS Code
                        </li>
                        <li>
                            <img src={chrome} alt='browser icon' />
                            Browser DevTools
                        </li>
                        <li>
                            <img src={postman} alt='postman icon' />
                            Postman
                        </li>
                        <li>
                            <img src={git} alt='git icon' />
                            Git
                        </li>
                        <li>
                            <img src={github} alt='github icon' />
                            GitHub
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}