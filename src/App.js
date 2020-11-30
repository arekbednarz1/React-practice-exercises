import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";
import Route from "./components/route";
import Header from "./components/header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components',
    },
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
];
// const showAccordion =() =>{
//     if (window.location.pathname === '/'){
//         return  <Accordion items={items}/>;
//     }
// };
//
// const showList = () =>{
//     if (window.location.pathname === '/list'){
//         return <Search />;
//     }
// };
//
// const showDropdown = () => {
//     if (window.location.pathname==='/dropdown'){
//         return <Dropdown />
//     }
// }
// const showTranslate = () =>{
//     if (window.location.pathname==='/translate'){
//         return <Translate/>;
//     }
// }


export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header/>
          <Route path="/">
              <Accordion items={items}/>
          </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                label="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>

    );
};