import React from 'react';

const Profile = ({ user }) => (
    <div className="row mt-2">
        <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={user.avatar_url} alt=""/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Repositórios: <span className="badge-success">{ user.public_repos }</span></li>
                    <li className="list-group-item">Seguidores: <span className="badge-primary">{ user.followers }</span></li>
                    <li className="list-group-item">Seguindo: <span className="badge-info">{ user.following }</span></li>
                </ul>
                <div className="card-body">
                    <a href={user.html_url} className="btn btn-info btn-block" target="_blank">Ver Perfil</a>
                </div>
            </div>
        </div>
    </div>
)

export default Profile;