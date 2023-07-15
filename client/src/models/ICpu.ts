export interface ICpu {
    id: number;
    name: string;
    brand: string;
    processor_family: string;
    socket: string;
    number_of_cores: number;
    number_of_streams: number;
    volume_of_3rd_level: number;
    basic_frequency: number;
    turbo_boost_frequency: number;
    graphics: string;
    price: number;
    img: string;
}