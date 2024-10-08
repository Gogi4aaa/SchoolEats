﻿namespace SchoolEats.Services.Data.Interfaces
{
	using SchoolEats.Data.Models;
	using Web.ViewModels.Purchase;
	using Web.ViewModels.SuperUser;

	public interface IPurchaseService
	{
		Task<List<AllPurchasesViewModel>> GetAllPurchasesByUserIdAsync(Guid userId);

		Task PurchaseDishAsync(Guid dishId, Guid userId,int purchasedQuantity, string code = "с карта");

		string GenerateRandomPurchaseCode();

		Task<List<AllPurchaseForSuperUserViewModel>> GetAllPurchases();

		Task CompletePurchaseAsync(List<Purchase> purchases);

		Task<Purchase> GetPurchaseByPurchaseId(Guid purchaseId);

		Task<List<Purchase>> GetPurchasesByPurchaseCodeAndBuyerIdAsync(string code, Guid buyerId);

		Task<decimal> GetPriceSumOfPurchaseByCodeAndBuyerIdAsync(string code, Guid buyerId);

		Task<DailyReportViewModel> GetDailyReportAsync();

		Task SendDailyReportAsync(DailyReportViewModel report);

		Task DeleteAllPurchasesByDateTimeAsync(DateTime date);

		Task<bool> IsReportAlreadySend(DateTime time);
	}
}
