using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;

namespace MatchStatistic
{
	public static class ApiHelper
	{
		public static HttpClient ApiClient { get; set; } = new HttpClient();
	
		public static void InitializeClient()
		{
			ApiClient = new HttpClient();
			ApiClient.BaseAddress = new Uri("");
			ApiClient.DefaultRequestHeaders.Accept.Clear();
			ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
		}
	}
}
