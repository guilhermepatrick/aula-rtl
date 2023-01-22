import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Card, CardActionArea } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleChange({ target }) {
    const value = target.value;
    setInputValue(value);
  }

  function handleClick() {
    // setTimeout(() => {
    //   setToDoList([...toDoList, inputValue]);
    //   setInputValue("");
    // }, "2000");
    setToDoList([...toDoList, inputValue]);
    setInputValue("");
  }

  function handleClickText({ target }) {
    const style = target.style.textDecoration;
    style === "none"
      ? (target.style.textDecoration = "line-through")
      : (target.style.textDecoration = "none");
  }

  function handleDelete({ target }) {
    const newList = toDoList.filter((el) => el !== target.name);
    setToDoList(newList);
  }

  return (
    <>
      <h1>To do List</h1>
      <Link to={"/outra-pagina"}>
        <p>Ir para outra página</p>
      </Link>
      <input
        type="text"
        value={inputValue}
        name="itemList"
        onChange={handleChange}
        placeholder="Digite aqui"
      />
      <button data-testid="add-btn" onClick={handleClick}>
        CADASTRAR
      </button>
      <div>
        {toDoList.map((el, i) => (
          <Card className="cardItem" key={i}>
            <CardActionArea onClick={handleClickText}>
              <p
                data-testid={`item-list`}
                style={{ textDecoration: "none" }}
                className="itemText"
              >
                {el}
              </p>
            </CardActionArea>
            <div>
              <Button
                data-testid="delete-btn"
                onClick={handleDelete}
                name={el}
                className="btn"
                color="error"
                variant="contained"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;
