import styled from 'styled-components'

const Options = styled.ul`
  display: flex;
`

const Option = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

const textOptions = ['categorias', 'minha estante', 'favoritos', 'sair']

function HeaderOptions() {
    return (
        <Options>
          { textOptions.map( text => <Option><p>{text.toUpperCase()}</p></Option> ) }
        </Options>
    )
}

export default HeaderOptions