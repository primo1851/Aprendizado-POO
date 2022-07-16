class Motor{
    private cilinders: number;
    private rotations: number;
    private brand: string;
    private poluter: boolean;

    constructor(cilinders: number, rotations: number, brand: string, poluter: boolean){
        this.cilinders = cilinders;
        this.brand = brand;
        this.rotations = rotations;
        this.poluter = poluter;
    }

    static isPoluter(poluter: boolean): boolean{
        if(poluter)
        {
            return true;
        }
        
        return false;
    }

    isBeginnerFriendly(cilinders: number): boolean{
        if(cilinders <= 250)
        {
            return true;
        }

        return false;

    }
}