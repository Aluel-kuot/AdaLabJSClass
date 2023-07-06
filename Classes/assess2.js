// quiz2
// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

class Recipe{
    constructor(ingredients,preparationTime,cookingMethod,nutritionalValue){
        this.ingredients=ingredients
        this.preparationTime=preparationTime
        this.nutritionalValue=nutritionalValue
    }
}


class MoroccanRecipe extends Recipe{
    constructor(ingredients,preparationTime,cookingMethod,nutritionalValue,taste,name){
        super(ingredients,preparationTime,cookingMethod,nutritionalValue)
        this.taste=taste
        this.name=name

    }
}
class  EthiopianRecipe extends Recipe{
    constructor(ingredients,preparationTime,cookingMethod,nutritionalValue,spice_levelk,name){
        super(ingredients,preparationTime,cookingMethod,nutritionalValue)
        this.spice_level=spice_level
        this.name=name

    }
}
class  NigerianRecipe  extends Recipe{
    constructor(ingredients,preparationTime,cookingMethod,nutritionalValue,category,name){
        super(ingredients,preparationTime,cookingMethod,nutritionalValue)
        this.spice_level=spice_level
        this.name=name

    }
}

