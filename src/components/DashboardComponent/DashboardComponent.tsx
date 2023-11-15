import './DashboardComponent.css'
import { LogOut } from '..';
import { client } from "@/supabase";
import { useEffect, useState } from 'react';

export default function DashboardComponent() {
    // const userState = useSelector((store: RootState) => store.user);
    //     console.log(userState.data);
    const [ id, setId ] = useState(String); 
    useEffect(() => {
        client.auth
          .getSession()
          .then((data) => {
            if (data.data.session != null) {
                setId(data.data.session.user.id);
            }
        })
        .catch((error) => console.log(error));
    }, []);
    
    console.log(id);
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Menú</h2>
                <ul>
                    <li>Inicio</li>
                    <li>Notificaciones</li>
                    <li>Configuración esto </li>
                    <LogOut></LogOut>
                </ul>
            </div>
            <div className="content">
                <h1>Bienvenido al Dashboard</h1>
                <div className="widget">
                    <h2>Widget 1</h2>
                    <p>Contenido del Widget 1</p>
                </div>
                <div className="widget">
                    <h2>Widget 2</h2>
                    <p>Contenido del Widget 2</p>
                </div>
            </div>
        </div>
    );
}
