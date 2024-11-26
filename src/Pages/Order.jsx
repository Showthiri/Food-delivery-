import React from 'react'
import { NavLink } from 'react-router-dom'

export const Order = () => {
  return (
    <div className="order">
      <NavLink to="/Foodorder" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>South Indian</button>
      </NavLink>

      <NavLink to="/north" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>North Indian</button>
      </NavLink>

      <NavLink to="/Briyani" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>Briyani</button>
      </NavLink>

      <NavLink to="/piz" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>Pizza</button>
      </NavLink>

      <NavLink to="/sandwitch" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>Sandwich</button>
      </NavLink>

      <NavLink to="/Cooldrinks" className={({ isActive }) => (isActive ? 'active' : '')}>
        <button>Cooldrinks</button>
      </NavLink>
    </div>
  )
}
