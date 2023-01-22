import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"
import renderWithRouter from "./renderWithRouter"

const addItem =()=>{
const numeroAleatorio = Math.random();
const inputText = screen.getByPlaceholderText(/digite aqui/i);
userEvent.type(inputText, numeroAleatorio);
const addBtn = screen.getByTestId('add-btn');
userEvent.click(addBtn);
}

describe('Testando a página Home',()=>{
  test('01. Testa se página foi renderizada corretamente', ()=>{
    const { history } = renderWithRouter(<App/>)
    // const pathname = history.location.pathname;
    expect(history.location.pathname).toBe('/')
  })
  test('02. Testa o botao de casdastrar está funcionando', ()=>{
    renderWithRouter(<App/>)
    addItem();
    addItem();   
    const deleteBtn = screen.getAllByTestId('delete-btn')
    expect(deleteBtn).toHaveLength(2);
  })
  test('03. Testa se esta riscando um item na lista', ()=>{
    renderWithRouter(<App/>)
    addItem();
    addItem();
    const itemList = screen.getAllByTestId('item-list');
    expect(itemList[0]).toHaveStyle({textDecoration: 'none'})
    userEvent.click(itemList[0])
    expect(itemList[1]).toHaveStyle({textDecoration: 'none'})    
  })
  test('04. Testa se a pagina é redirecionada corretamente', ()=>{
    const {history} = renderWithRouter(<App/>)
    const link = screen.getByText(/ir para outra página/i);
    userEvent.click(link)
    expect(history.location.pathname).toBe('/outra-pagina')
    const img = screen.getByRole('img', {
      name: /imagem de um rato/i
    });
    expect(img.src).toContain("http://localhost/ratola.png")
  })
})