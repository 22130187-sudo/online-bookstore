// src/components/Notification.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Notification.css";

export default function Notification() {
  const { notification } = useContext(CartContext);
  if (!notification) return null;

  return <div className="notification">{notification}</div>;
}
