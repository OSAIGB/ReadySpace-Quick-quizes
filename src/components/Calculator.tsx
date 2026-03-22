import React, { useState } from 'react';

type Props = { onClose: () => void };

export default function Calculator({ onClose }: Props) {
  const [expr, setExpr] = useState('');

  const append = (v: string) => setExpr((s) => s + v);
  const clear = () => setExpr('');
  const back = () => setExpr((s) => s.slice(0, -1));

  const evaluate = () => {
    try {
      if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
        setExpr('Error');
        return;
      }
      // eslint-disable-next-line no-new-func
      const result = Function(`return (${expr})`)();
      setExpr(String(result));
    } catch (e) {
      setExpr('Error');
    }
  };

  return (
    <div className="w-[340px] max-w-full bg-white rounded-2xl shadow-2xl border border-stone-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-sm text-stone-800">Calculator</h3>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600">Close</button>
        </div>
      </div>

      <div className="bg-stone-50 rounded-xl p-3 font-mono text-right text-2xl text-stone-800 mb-3 min-h-[48px]">
        {expr || '0'}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map((k) => {
          if (k === '=') {
            return (
              <button key={k} onClick={evaluate} className="py-3 rounded-lg bg-emerald-600 text-white font-bold">=
              </button>
            );
          }

          if (['/','*','-','+','.'].includes(k)) {
            return (
              <button key={k} onClick={() => append(k)} className="py-3 rounded-lg bg-stone-100">{k}</button>
            );
          }

          return (
            <button key={k} onClick={() => append(k)} className="py-3 rounded-lg bg-white border border-stone-100">{k}</button>
          );
        })}

        <button onClick={clear} className="col-span-2 py-3 rounded-lg bg-red-100 text-red-600 font-bold">C</button>
        <button onClick={back} className="col-span-2 py-3 rounded-lg bg-stone-100">⌫</button>
      </div>
    </div>
  );
}
