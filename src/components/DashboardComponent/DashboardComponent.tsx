import './DashboardComponent.css'
import { LogOut } from '..';

export default function DashboardComponent() {
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
