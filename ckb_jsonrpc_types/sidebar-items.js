initSidebarItems({"derive":[["Deserialize",""],["Serialize",""]],"enum":[["DepType","The dep cell type. Allowed values: \"code\" and \"dep_group\"."],["OutputsValidator","Transaction output validators that prevent common mistakes."],["ResponseFormat","This is a wrapper for JSON serialization to select the format between Json and Hex."],["ScriptHashType","Specifies how the script `code_hash` is used to match the script code."],["Status","Status for transaction"]],"mod":[["error","jsonrpc errors"],["id","jsonrpc id field"],["params","jsonrpc params field"],["request","jsonrpc request"],["response","jsonrpc response"],["version","jsonrpc version field"]],"struct":[["Alert","An alert is a message about critical problems to be broadcast to all nodes via the p2p network."],["AlertMessage","An alert sent by RPC `send_alert`."],["BannedAddr","A banned P2P address."],["Block","The JSON view of a Block used as a parameter in the RPC."],["BlockEconomicState",""],["BlockIssuance","Block base rewards."],["BlockReward","Breakdown of miner rewards issued by block cellbase transaction."],["BlockTemplate","A block template for miners."],["BlockView","The JSON view of a Block including header and body."],["Byte32",""],["CellData","The cell data content and hash."],["CellDep","The cell dependency of a transaction."],["CellInfo","The JSON view of a cell combining the fields in cell output and cell data."],["CellInput","The input cell of a transaction."],["CellOutput","The fields of a output cell except the cell data."],["CellOutputWithOutPoint","This is used as return value of `get_cells_by_lock_hash` RPC."],["CellTransaction","Cell related transaction information."],["CellWithStatus","The JSON view of a cell with its status information."],["CellbaseTemplate","The cellbase transaction template of the new block for miners."],["ChainInfo","Chain information."],["DryRunResult","Response result of the RPC method `dry_run_transaction`."],["EpochView","JSON view of an epoch."],["EstimateResult","The estimated fee rate."],["ExtraLoggerConfig","Runtime logger config for extra loggers."],["Header","The block header."],["HeaderView","The JSON view of a Header."],["JsonBytes","Variable-length binary encoded as 0x-prefixed hex string in JSON."],["LiveCell","An indexed live cell."],["LocalNode","Information of node itself."],["LocalNodeProtocol","Information of a P2P protocol supported by the local node."],["LockHashCapacity","Accumulated capacity of a set of cells."],["LockHashIndexState","Cell script lock hash index state."],["MainLoggerConfig","Runtime logger config."],["MinerReward","Block rewards for miners."],["NodeAddress","Node P2P address and score."],["OutPoint","Reference to a cell via transaction hash and output index."],["PeerState",""],["PeerSyncState","The chain synchronization state between the local node and a remote node."],["ProposalShortId","The 10-byte fixed-length binary encoded as 0x-prefixed hex string in JSON."],["RemoteNode","Information of a remote node."],["RemoteNodeProtocol","The information about an active running protocol."],["Script","Describes the lock script and type script for a cell."],["SyncState","The overall chain synchronization state of this local node."],["Transaction","The transaction."],["TransactionPoint","Reference to a cell by trnasction hash and output index, as well as in which block this transaction is committed."],["TransactionTemplate","Transaction template which is ready to be commit in the new block."],["TransactionView","The JSON view of a Transaction."],["TransactionWithStatus","JSON view of a transaction as well as its status."],["TxPoolInfo","Transaction pool information."],["TxStatus","Transaction status and the block hash if it is committed."],["UncleBlock","The uncle block used as a parameter in the RPC."],["UncleBlockView","The uncle block."],["UncleTemplate","The uncle block template of the new block for miners."]],"trait":[["Deserialize","A data structure that can be deserialized from any data format supported by Serde."],["Serialize","A data structure that can be serialized into any data format supported by Serde."]],"type":[["AlertId","Alert identifier is used to filter duplicated alerts."],["AlertPriority","Alerts are sorted by priority. Greater integers means higher priorities."],["BlockNumber","Consecutive block number starting from 0."],["Capacity","The capacity of a cell is the value of the cell in Shannons. It is also the upper limit of the cell occupied storage size where every 100,000,000 Shannons give 1 byte storage."],["Cycle","Count of cycles consumed by CKB VM to run scripts."],["EpochNumber","Consecutive epoch number starting from 0."],["EpochNumberWithFraction","The epoch indicator of a block. It shows which epoch the block is in, and elapsed epoch fraction after adding this block."],["FeeRate","The fee rate is the ratio between fee and transaction weight in unit Shannon per 1,000 bytes."],["Timestamp","The Unix timestamp in milliseconds (1 second is 1000 milliseconds)."],["Uint128","The  128-bit  unsigned integer type encoded as the 0x-prefixed hex string in JSON."],["Uint32","The  32-bit  unsigned integer type encoded as the 0x-prefixed hex string in JSON."],["Uint64","The  64-bit  unsigned integer type encoded as the 0x-prefixed hex string in JSON."],["Version","The simple increasing integer version."]]});