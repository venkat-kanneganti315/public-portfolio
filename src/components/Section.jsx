import React from 'react'
export default function Section({ id, title, children }){
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}