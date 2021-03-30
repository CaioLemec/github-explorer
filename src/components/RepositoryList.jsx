import { RepositoryItem } from "./RepositoryItem";
import '../../src/styles/repositories.scss'

const repository = {
    name: 'unform',
    description: 'Blábláblá',
    link: 'https://github.com.br/unform/unform'
}

export function RepositoryList () {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
               <RepositoryItem repository={repository} /> 
               <RepositoryItem repository={repository} /> 
               <RepositoryItem repository={repository} /> 
               <RepositoryItem repository={repository} /> 
            </ul>
        </section>
    );
};