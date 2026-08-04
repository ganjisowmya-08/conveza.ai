const STORAGE_KEY = "conveza_chats";

// Helper to generate IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

// Default mock conversations to initialize if storage is empty
const MOCK_CONVERSATIONS = [
    {
        id: "chat_1",
        customerName: "Sarah Jenkins",
        email: "sarah.j@example.com",
        phone: "+1 (555) 234-5678",
        status: "escalated",
        unansweredQuestion: "Does your eco apparel shrink after washing, and do you offer bulk discounts for organic summer dresses?",
        updatedAt: Date.now() - 3600000 * 2, // 2 hours ago
        messages: [
            {
                id: "m1",
                sender: "user",
                text: "Hello! I'm planning to place a bulk order.",
                time: "02:15 PM",
                timestamp: Date.now() - 3600000 * 2 - 60000
            },
            {
                id: "m2",
                sender: "ai",
                text: "Hi Sarah! I can absolutely help you with your order. What items are you interested in?",
                time: "02:15 PM",
                timestamp: Date.now() - 3600000 * 2 - 50000
            },
            {
                id: "m3",
                sender: "user",
                text: "I need 50 of the Eco Summer Floral Dresses. But before that, does your eco apparel shrink after washing, and do you offer bulk discounts for organic summer dresses?",
                time: "02:16 PM",
                timestamp: Date.now() - 3600000 * 2
            },
            {
                id: "m4",
                sender: "ai",
                text: "I'm sorry, I couldn't find details on fabric shrinkage or specific bulk pricing rates in my knowledge base. Connecting you to a manual agent now to help you with the order...",
                time: "02:16 PM",
                timestamp: Date.now() - 3600000 * 2 + 5000
            }
        ]
    },
    {
        id: "chat_2",
        customerName: "Alex Rivera",
        email: "alex.rivera@example.com",
        phone: "+91 99887 76655",
        status: "resolved",
        unansweredQuestion: "Is it possible to customize the t-shirts with our own corporate logo?",
        updatedAt: Date.now() - 3600000 * 5, // 5 hours ago
        messages: [
            {
                id: "m1_2",
                sender: "user",
                text: "Hi, do you sell organic t-shirts?",
                time: "11:20 AM",
                timestamp: Date.now() - 3600000 * 5 - 120000
            },
            {
                id: "m2_2",
                sender: "ai",
                text: "Yes, we offer our Classic Organic T-Shirt for $25. It comes in Sage Green, Navy, and Oatmeal colors.",
                time: "11:20 AM",
                timestamp: Date.now() - 3600000 * 5 - 100000
            },
            {
                id: "m3_2",
                sender: "user",
                text: "Great. Is it possible to customize the t-shirts with our own corporate logo?",
                time: "11:21 AM",
                timestamp: Date.now() - 3600000 * 5 - 80000
            },
            {
                id: "m4_2",
                sender: "ai",
                text: "I'm sorry, I don't have information about corporate custom printing in my knowledge base. Let me connect you with a human representative...",
                time: "11:21 AM",
                timestamp: Date.now() - 3600000 * 5 - 75000
            },
            {
                id: "m5_2",
                sender: "manual",
                text: "Hi Alex! Yes, we absolutely do custom printing for corporate orders above 30 units. I can send over our bulk print catalog if you share your company name.",
                time: "11:25 AM",
                timestamp: Date.now() - 3600000 * 5 - 30000
            },
            {
                id: "m6_2",
                sender: "user",
                text: "Perfect! Please send it to my email. Thank you for the quick help.",
                time: "11:26 AM",
                timestamp: Date.now() - 3600000 * 5
            }
        ]
    }
];

export const chatStorage = {
    getChats() {
        const chatsJson = localStorage.getItem(STORAGE_KEY);
        if (!chatsJson) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_CONVERSATIONS));
            return MOCK_CONVERSATIONS;
        }
        try {
            return JSON.parse(chatsJson);
        } catch (e) {
            console.error("Failed to parse chats from localStorage, resetting", e);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_CONVERSATIONS));
            return MOCK_CONVERSATIONS;
        }
    },

    getChatById(id) {
        const chats = this.getChats();
        return chats.find(c => c.id === id);
    },

    saveChats(chats) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
        // Dispatch event for local/cross-tab reactivity
        window.dispatchEvent(new Event("conveza_chats_updated"));
    },

    getOrCreateActiveChat() {
        const chats = this.getChats();
        // Look for an active or escalated chat that is marked as the "current visitor"
        // For simulation purposes, we check if there's a chat with id "visitor_chat"
        let activeChat = chats.find(c => c.id === "visitor_chat");
        if (!activeChat) {
            activeChat = {
                id: "visitor_chat",
                customerName: "Anonymous Visitor",
                email: "",
                phone: "",
                status: "active",
                unansweredQuestion: "",
                updatedAt: Date.now(),
                messages: [
                    {
                        id: "initial_m",
                        sender: "ai",
                        text: "Hello! Welcome to Conveza.AI. 🤖 I am your virtual assistant. How can I help you scale your business today?",
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        timestamp: Date.now()
                    }
                ]
            };
            const updated = [activeChat, ...chats.filter(c => c.id !== "visitor_chat")];
            this.saveChats(updated);
        }
        return activeChat;
    },

    addMessage(chatId, sender, text, type = "text") {
        const chats = this.getChats();
        const chatIdx = chats.findIndex(c => c.id === chatId);
        if (chatIdx === -1) return null;

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMsg = {
            id: generateId(),
            sender,
            text,
            type,
            time: timeString,
            timestamp: Date.now()
        };

        const updatedChat = {
            ...chats[chatIdx],
            messages: [...chats[chatIdx].messages, newMsg],
            updatedAt: Date.now()
        };

        const updatedChats = [...chats];
        updatedChats[chatIdx] = updatedChat;
        this.saveChats(updatedChats);
        return updatedChat;
    },

    escalateChat(chatId, unansweredQuestion) {
        const chats = this.getChats();
        const chatIdx = chats.findIndex(c => c.id === chatId);
        if (chatIdx === -1) return null;

        const updatedChat = {
            ...chats[chatIdx],
            status: "escalated",
            unansweredQuestion,
            updatedAt: Date.now()
        };

        const updatedChats = [...chats];
        updatedChats[chatIdx] = updatedChat;
        this.saveChats(updatedChats);
        return updatedChat;
    },

    resolveChat(chatId) {
        const chats = this.getChats();
        const chatIdx = chats.findIndex(c => c.id === chatId);
        if (chatIdx === -1) return null;

        const updatedChat = {
            ...chats[chatIdx],
            status: "resolved",
            updatedAt: Date.now()
        };

        // For simulation, if it's the visitor's main chat, we rename its ID to archive it
        // and let a new active chat be generated for future visits.
        if (chatId === "visitor_chat") {
            updatedChat.id = "chat_" + generateId();
        }

        const updatedChats = [...chats];
        if (chatId === "visitor_chat") {
            // Add archived chat and remove "visitor_chat" placeholder so next creation starts fresh
            const filtered = chats.filter(c => c.id !== "visitor_chat");
            this.saveChats([updatedChat, ...filtered]);
        } else {
            updatedChats[chatIdx] = updatedChat;
            this.saveChats(updatedChats);
        }

        return updatedChat;
    },

    clearVisitorChat() {
        const chats = this.getChats().filter(c => c.id !== "visitor_chat");
        this.saveChats(chats);
        return this.getOrCreateActiveChat();
    }
};
