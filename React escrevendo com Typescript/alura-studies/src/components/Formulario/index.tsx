import React from "react";
import Botao from "../Botao";
import styles from "./Formulario.module.scss";
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;
