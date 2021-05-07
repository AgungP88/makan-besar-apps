
class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border : 2px solid grey;
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
        }
       
        .meal-tumb {
            width: 100%;
            max-height: 500px;
            object-fit: cover;
            object-position: center;
        }
       
        .meal-info {
            padding: 24px;
        }
       
        .meal-info > h2 {
            font-weight: lighter;
        }
       
        .meal-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
    </style>
    <img class="meal-tumb" src="${this._meal.strMealThumb}" alt="Fan Art">
    <h1 align="center">${this._meal.strMeal}</h1>
    <div class="meal-info">
        <h2>Form : ${this._meal.strArea}</h2>
        <p>Instruction :</p>
        <p>${this._meal.strInstructions}</p>
        <p>link video : <a href="${this._meal.strYoutube}">${this._meal.strYoutube}</a></p>
    </div>`;
    }
}

customElements.define("meal-item", MealItem);