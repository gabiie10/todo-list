import React,{useEffect} from "react";
import Header from "../../components/Header/header";
import * as yup from "yup";
import "./editar.css"
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
const validationPost=yup.object().shape({
    title: yup.string().required("O nome é obrigatorio").max(40,"O titulo so pode ter 40 caracteres"),
    description: yup.string().required("A descriçao é obrigatoria").max(150,"A descriçao so pode ter 150 caracteres"),
    content: yup.string().required("O conteudo é obrigatorio").max(500,"O conteudo so pode ter 500 caracteres")
})
const Edit=()=>{
    const{id}=useParams()

    const addPost=data=>axios.put(`http://localhost:5000/cadastro/${id}`,data)
    .then(()=>{
        alert("Editado com sucesso!");
    })
    .catch(()=>{
        alert("Algo deu errado,não foi possivel editar.")
    }    );


    const{register,handleSubmit,formState:{errors},reset}= useForm(
        {
            resolver:yupResolver(validationPost)
        }
    )
   
    useEffect(()=>{
        axios.get(`http://localhost:5000/cadastro/${id}`)
        .then((response)=>{
            reset(response.data)
        })
    },[])

   
    return(
        <div className="editar">
            <h1>Ediçao</h1>
            <Header/>
            <main>
                <div className="card-post">
                    <h1>criar postagem</h1>
                    <div className="line-post"></div>
                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Titulo</label>
                                <input type="text" name="title" {...register("title")}/>
                                <p className="error-message">{errors.title?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Descriçao</label>
                                <input type="text" name="description" {...register("description")}/>
                                <p className="error-message">{errors.description?.message}</p>

                            </div>
                            <div className="fields">
                                <label>Conteudo</label>
                                <textarea type="text" name="content" {...register("content")}></textarea>
                                <p className="error-message">{errors.content?.message}</p>

                            </div>
                            <div>
                                <button className="submit" type="submit">ENVIAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

        </div>
    );
};
export default Edit;