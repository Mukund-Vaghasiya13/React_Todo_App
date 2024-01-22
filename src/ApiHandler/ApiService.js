import { ApiHandler } from "./ApiHandler";

class UsageOfService {
    async FetchData(AccessToken) {
        try {
            const response = await ApiHandler.GetData({
                url: "/api/todo/v1/Todos/todo/gettodo",
                token: AccessToken,
            });

            if (response?.data.success) {
                const ArrayOfdata = response.data;
                return ArrayOfdata.data || [];
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error appropriately, e.g., show an error message to the user
            return [];
        }
    }

    async RemoveTodo(AccessToken, id) {
        try {
            const data = {
                TodoID: id,
            };

            const response = await ApiHandler.PostRequest({
                data: data,
                url: "/api/todo/v1/Todos/todo/delete",
                token: AccessToken,
            });

            if (response?.data.success) {
                return await this.FetchData(AccessToken);
            }
        } catch (error) {
            console.error("Error removing todo:", error);
            // Handle the error appropriately, e.g., show an error message to the user
            return [];
        }
    }

    async EditTodo(AccessToken, message, id) {
        try {
            const data = {
                TodoID: id,
                todo: message,
            };

            const response = await ApiHandler.PostRequest({
                data: data,
                url: "/api/todo/v1/Todos/todo/update",
                token: AccessToken,
            });

            if (response?.data.success) {
                return await this.FetchData(AccessToken);
            }
        } catch (error) {
            console.error("Error editing todo:", error);
            // Handle the error appropriately, e.g., show an error message to the user
            return [];
        }
    }
}

export const Usage = new UsageOfService();