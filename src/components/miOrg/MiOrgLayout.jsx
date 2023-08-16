import React from 'react'

export const MiOrgLayout = ({handlerClick}) => {
  return (
    <section className="org-container">
            <h3>Mi organizacíon</h3>
            <img src="src/assets/add.png" alt="icono add" onClick={handlerClick} />
        </section>
  )
}
