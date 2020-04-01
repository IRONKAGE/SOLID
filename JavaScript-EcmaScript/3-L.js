// Liskov Substitution Principle

// ===== 1 приклад [рівні доступу] =====
class Person { // є обов'язковим для LSP

}

class Member extends Person {
    access() {
        console.log('У тебе є доступ!')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('У тебе немає доступу! Йди до себе!')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // Слід наслідуватись від Member

// ===============


// ===== 2 приклад =====
class Component { // є обов'язковим для LSP
    isComponent = true
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Компонент</div>`
    }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Неможливо відрендерити')
    }

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())