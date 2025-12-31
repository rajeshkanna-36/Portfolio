import { useState } from 'react';

const CalculatorApp = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (val: string) => {
        if (val === 'C') setInput('');
        else if (val === '=') setInput('Error: Demo Only');
        else setInput(prev => prev + val);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 pt-24 font-mono">
            <div className="bg-black rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden border border-gray-800">
                {/* Display */}
                <div className="p-8 pb-4 text-right">
                    <div className="text-gray-400 text-sm h-6">Ans = 0</div>
                    <div className="text-white text-5xl font-light tracking-wide overflow-x-auto whitespace-nowrap scrollbar-hide">
                        {input || '0'}
                    </div>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-4 gap-4 p-6 bg-gray-900 rounded-t-3xl">
                    {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleButtonClick(btn)}
                            className={`
                        w-14 h-14 rounded-full text-2xl font-medium transition active:scale-95
                        ${btn === '0' ? 'col-span-2 w-full text-left pl-6' : ''}
                        ${['÷', '×', '-', '+', '='].includes(btn)
                                    ? 'bg-orange-500 text-white hover:bg-orange-400'
                                    : ['C', '±', '%'].includes(btn)
                                        ? 'bg-gray-300 text-black hover:bg-gray-200'
                                        : 'bg-gray-800 text-white hover:bg-gray-700'
                                }
                    `}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalculatorApp;
