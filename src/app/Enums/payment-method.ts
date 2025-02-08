export enum PaymentMethod{
    Card = 1,
    UPI = 2,
    NetBanking = 3,
    Wallet = 4,
}


export enum AppPaymentStatus
{
    Created = 1,
    Authorized = 2,
    Captured = 3,
    Refunded = 4,
    Failed = 5
}