import React from'react';

const Yingyong = () => {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            {/* 页面标题 */}
            <h2 className="text-3xl font-bold mb-6 text-blue-600 animate-pulse">DOGE的应用方面</h2>

            {/* 钱包地址相关信息 */}
            <div className="mb-12 bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-green-600">一. 钱包地址相关信息</h3>

                {/* 定义与作用 */}
                <p className="mb-3 text-lg font-semibold">1. 定义与作用</p>
                <ul className="list-disc pl-8 mb-4 space-y-2">
                    <li>唯一标识符：以字母`D`开头的字符串（如`D7v6S5Uj...`），用于收发DOGE。</li>
                    <li>公开透明：可分享给他人接收资金，交易记录可通过区块链公开查询。</li>
                    <li>私钥关联：地址由私钥生成，私钥是控制资产的唯一凭证（必须保密）。</li>
                </ul>

                {/* 获取方式 */}
                <p className="mb-3 text-lg font-semibold">2. 获取方式</p>
                <ul className="list-disc pl-8 mb-4 space-y-2">
                    <li>选择钱包：软件（Trust Wallet）、硬件（Ledger）或交易所托管钱包。</li>
                    <li>生成地址：创建/导入钱包后，点击“接收”生成新地址（支持多地址生成）。</li>
                    <li>注意：交易所地址由平台管理，私钥不归用户所有。</li>
                </ul>

                {/* 格式与特性 */}
                <p className="mb-3 text-lg font-semibold">3. 格式与特性</p>
                <ul className="list-disc pl-8 mb-4 space-y-2">
                    <li>标准格式：以`D`开头，区分大小写，含校验机制（输入错误会提示无效）。</li>
                    <li>兼容性：仅限DOGE网络，切勿转至其他币种地址（如BTC/ETH会导致资产丢失）。</li>
                </ul>

                {/* 使用注意事项 */}
                <p className="mb-3 text-lg font-semibold">4. 使用注意事项</p>
                <ul className="list-disc pl-8 mb-4 space-y-2">
                    <li>验证地址：转账前通过复制粘贴或扫码获取，首次交易建议小额测试。</li>
                    <li>避免重用：长期使用同一地址可能泄露隐私，推荐每次生成新地址（HD钱包支持）。</li>
                </ul>

                {/* 安全建议 */}
                <p className="mb-3 text-lg font-semibold">5. 安全建议</p>
                <ul className="list-disc pl-8 mb-4 space-y-2">
                    <li>私钥管理：离线保存（纸质/硬件钱包），避免截图或云端存储。</li>
                    <li>防范风险：警惕钓鱼网站或恶意软件篡改剪贴板地址。</li>
                    <li>定期备份：更换设备前确保备份助记词或Keystore文件。</li>
                </ul>

                {/* 常见问题 */}
                <p className="mb-3 text-lg font-semibold">6. 常见问题</p>
                <ul className="list-disc pl-8 mb-4 space-y-2">
                    <li>Q1：地址泄露会丢币吗？ → 不会，需私钥才能转出资产。</li>
                    <li>Q2：地址会失效吗？ → 永久有效，除非私钥丢失或钱包服务终止。</li>
                    <li>Q3：能否通过地址反推私钥？ → 不能，加密算法不可逆（量子计算机除外）。</li>
                </ul>

                <p className="text-gray-700">核心原则：私钥即资产，地址可公开；转账需谨慎，备份防丢失。</p>
            </div>

            {/* 可作为支付手段的平台 */}
            <div className="mb-12 bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-green-600">二. 在哪些线上线下平台可作为支付手段？</h3>

                {/* 线上平台 */}
                <p className="mb-3 text-lg font-semibold">线上平台</p>
                <ul className="list-disc pl-8 mb-4 space-y-2">
                    <li>购物平台：如Newegg（新蛋）、Overstock、Crypto Emporium等在线零售商接受狗狗币支付商品。CheapAir、Travala等在线旅行社接受狗狗币用于机票和酒店预订。还有一些电商平台如Shopify，允许商家集成狗狗币支付。</li>
                    <li>流媒体与游戏平台：Twitch允许创作者接受狗狗币作为捐赠。Pornhub成人娱乐网站于2022年开始接受狗狗币。曾有消息称Steam游戏平台短暂接受过狗狗币。</li>
                    <li>其他平台：微软、Expressvpn、Namecheap等平台也接受狗狗币。</li>
                </ul>

                {/* 线下平台 */}
                <p className="mb-3 text-lg font-semibold">线下平台</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li>零售门店：AMC Theatres连锁影院、GameStop游戏和电子产品零售商。NBA球队达拉斯独行侠队接受狗狗币支付门票。有消息称Subway计划在2024年在其门店接受狗狗币支付三明治和沙拉。</li>
                    <li>餐饮场所：Pizza Hut在一些精选地点接受狗狗币订购披萨，Taco Bell也在试点接受狗狗币订购墨西哥卷饼和其他物品。</li>
                </ul>
            </div>

            {/* 进行支付的全过程 */}
            <div className="mb-12 bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-green-600">三. 进行支付的全过程</h3>

                {/* 过程 */}
                <p className="mb-3 text-lg font-semibold">1. 过程</p>
                <p className="mb-3 text-lg font-semibold"> - a.创建钱包</p>
                <p className="mb-3">   - 用户需先下载支持DOGE的钱包（如MultiDoge、Trust Wallet、Ledger硬件钱包等），生成公钥（接收地址）和私钥（用于签名交易）。</p>
                <p className="mb-3 text-lg font-semibold"> - b.获取DOGE</p>
                <p className="mb-3">   - 通过加密货币交易所（如Binance、Coinbase）购买DOGE，或通过他人转账接收。</p>
                <p className="mb-3 text-lg font-semibold"> - c.发起支付</p>
                <p className="mb-3">   -发送方输入接收方的DOGE地址、转账金额，确认交易细节后签名并广播到DOGE网络。</p>
                <p className="mb-3 text-lg font-semibold"> - d.网络确认</p>
                <p className="mb-3">   - DOGE网络通过工作量证明（PoW）机制验证交易，平均每**1分钟**生成一个新区块，通常1 - 6个区块确认（约1 - 6分钟）即可视为交易完成。</p>
                <p className="mb-3 text-lg font-semibold"> - e.接收方到账</p>
                <p className="mb-3">   - 接收方的钱包显示余额更新，资金可用于后续支付或兑换为其他资产。</p>

                {/* 便捷性 */}
                <p className="mb-3 text-lg font-semibold">2. 便捷性</p>
                <p className="mb-3"> - 快（1分钟确认），简单（扫码支付），跨境无阻，被部分平台接受。</p>

                {/* 安全性 */}
                <p className="mb-3 text-lg font-semibold">3. 安全性</p>
                <p className="mb-3"> - 区块链防篡改，但需自行保管私钥，交易不可逆（地址错则资产丢）。</p>

                {/* 手续费 */}
                <p className="mb-3 text-lg font-semibold">4. 手续费</p>
                <p> - 几乎忽略不计（单笔约0.002美元），适合高频小额场景。</p>

                <p className="text-gray-700">核心优势：低成本、速度快，适合日常小额支付和跨境转账，但需谨慎操作防误。</p>
            </div>

            {/* 在去中心化交易所的交易情况 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-green-600">四. 在去中心化交易所的交易情况</h3>
                <p className="mb-3">交易量方面：XBIT去中心化交易所的狗狗币杠杆产品单周交易量曾突破18亿美元，较前一周增长180%。2025年3月，其平台DOGE日均交易量突破4.5亿美元，创下2024年以来新高。 </p>
                <p className="mb-3">交易对方面：DEX支持以太坊、Solana等12条公链资产直接兑换DOGE，覆盖87%市场流动性，其中DOGE/USDT交易对较为活跃，滑点率仅0.12%，远低于中心化交易所0.45%的平均水平。 </p>
                <p className="mb-3">交易优势方面：DEX通过智能合约实现资产自主控制，用户私钥始终存于本地钱包，交易通过链上结算自动执行，可规避类似FTX暴雷的单点故障风险。同时，XBIT去中心化交易所采用冷钱包分片存储系统与零知识证明（ZKP）链上审计模块，用户资产全流程透明化，所有交易记录可通过区块链浏览器实时追溯。 </p>
                <p className="mb-3">市场份额方面：当前DEX仅占DOGE总交易量的7.3%，不过2025年第一季度，DEX市场份额已增至28%，其中合规化平台贡献超68%的增量。 </p>
                <p>用户群体方面：XBIT平台推出质押服务，允许用户以DOGE质押获取XBT治理代币，吸引了大量18 - 35岁年轻投资者，30天内带动平台DOGE交易量激增300%。</p>
            </div>
        </div>
    );
};

export default Yingyong;    