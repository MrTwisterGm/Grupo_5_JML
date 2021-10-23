import React from 'react'
import  './topbar.css'

import SettingsIcon from '@mui/icons-material/Settings';


export default function Topbar() {
    return (
        <div className="topbar">
          <div className="topbarWrapper">
              <div className="topLeft"> 
              <span className="logo">JML</span>
              </div>
              
              <div className="topRight"> 
              
              <div className="topbarIconContainer">
                  <SettingsIcon/>
                  
              </div>
              <img src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-icono-de-perfil-de-avatar-predeterminado-marcador-de-posici%C3%B3n-de-foto-gris-vectores-de-ilustraciones.jpg?ver=6" alt="" className="topAvatar" />
              </div>
          </div>
           
        </div>
    )
}
