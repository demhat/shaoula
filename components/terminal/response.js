import React from 'react'

import styles from './cmd.module.scss'

function Response({children, ...props}) {
    return (
        <div className={styles.response} {...props}>
            <article>
                <p>
                    <code>{children}</code>
                </p>
            </article>
        </div>
    )
}

export default Response
