/*
 * 时间:  2026-09-06
 * 作者:  YaYa
 * 描述:  模拟后端接口
 */

//创建MockApi对象,封装模拟数据以及模拟方法
const MockApi = (function () {
    // 模拟后端数据库
    const mockDB = {
        // 用户账号数据
        users: [
            { username: "admin", password: "123456", name: "管理员" },
            { username: "user", password: "123456", name: "普通用户" }
        ]
    };

    // 模拟token存储，页面刷新会丢失；如需持久化可以写到localStorage
    let mockToken = null;

    // 模拟请求延迟
    const delay = function (ms = 300) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    return {
        /**
         * 模拟登录接口 POST /api/login
         * @param {Object} params {username,password}
         */
        login: async function (params) {
            await delay(600); // 模拟网络请求耗时
            const { username, password } = params;
            const user = mockDB.users.find(item => item.username === username && item.password === password);
            if (user) {
                mockToken = "mock_token_" + Date.now();
                // 也可以把token存入localStorage
                localStorage.setItem("token", mockToken);
                return {
                    code: 0,
                    msg: "登录成功",
                    data: {
                        token: mockToken,
                        username: user.username,
                        name: user.name
                    }
                }
            } else {
                return {
                    code: -1,
                    msg: "账号或密码错误",
                    data: null
                }
            }
        },

        /**
         * 退出登录 POST /api/logout
         */
        logout: async function () {
            await delay(200);
            mockToken = null;
            localStorage.removeItem("token");
            return { code: 0, msg: "退出成功" }
        }
    }
})();